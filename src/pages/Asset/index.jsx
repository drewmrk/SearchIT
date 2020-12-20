import { useEffect, useState } from 'react'
import { db } from '../../db/services'
import Asset from '../../components/Asset'
import Data from '../../components/Asset/Data'
import Wrapper from '../../components/Wrapper'
import Create from '../../components/Create'
import styles from './styles.module.scss'

const PageAsset = () => {
  const [assetDetails, setAssetDetails] = useState([])

  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)

  const [statusShown, setStatusShown] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [statusClass, setStatusClass] = useState('')

  useEffect(() => {
    db()
      .collection('assets')
      .doc(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
      .get()
      .then(doc => {
        if (doc.exists) {
          setAssetDetails(doc.data())
        } else {
          window.location.replace('/')
        }
      })
  }, [])

  const deleteAsset = () => {
    db()
      .collection('assets')
      .doc(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
      .delete()
      .then(() => {
        setStatusShown(true)
        setStatusMessage('Asset successfully deleted.')
        setStatusClass(styles.statusSuccess)
        setTimeout(() => {
          window.location.replace('/')
        }, 1000)
      })
      .catch(err => {
        setStatusShown(true)
        setStatusMessage(`An error occurred: ${err}`)
        setStatusClass(styles.statusError)
      })
  }

  return (
    <Wrapper title="Asset">
      <Asset>
        <Data assetDetails={assetDetails} />
      </Asset>
      <button className={styles.editBttn} onClick={() => setEditModalOpen(!editModalOpen)}>
        Edit
      </button>
      {editModalOpen && (
        <dialog className={styles.editModal} open={editModalOpen}>
          <Wrapper title="Edit">
            <Create edit={true} />
          </Wrapper>
          <button className={styles.editBttn} onClick={() => setDeleteModalOpen(!deleteModalOpen)}>
            Delete
          </button>
          <button className={styles.editBttn} onClick={() => setEditModalOpen(!editModalOpen)}>
            Close
          </button>
          {deleteModalOpen && (
            <dialog className={styles.deleteModal} open={deleteModalOpen}>
              <div className={styles.deleteModalWrapper}>
                <h1 className={styles.deleteModalTitle}>Are you sure you want to delete this asset?</h1>
                <button className={styles.editBttn} onClick={() => setDeleteModalOpen(!deleteModalOpen)}>
                  No
                </button>
                <button className={styles.editBttn} onClick={() => deleteAsset()}>
                  Yes
                </button>
                {statusShown && <p className={`${styles.deleteStatus} ${statusClass}`}>{statusMessage}</p>}
              </div>
            </dialog>
          )}
        </dialog>
      )}
    </Wrapper>
  )
}

export default PageAsset
