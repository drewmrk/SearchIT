import { useState, useEffect } from 'react'
import { db } from '../../db/services'
import styles from '../../styles/components/Form.module.scss'

const Create = props => {
  const [name, setName] = useState('')
  const [asset, setAsset] = useState('')
  const [serial, setSerial] = useState('')
  const [condition, setCondition] = useState('New')
  const [location, setLocation] = useState('')
  const [checkoutTo, setCheckoutTo] = useState('')
  const [notes, setNotes] = useState('')

  const [statusShown, setStatusShown] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [statusClass, setStatusClass] = useState('')

  useEffect(() => {
    props.edit &&
      db()
        .collection('assets')
        .doc(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
        .get()
        .then(doc => {
          setName(doc.data().name)
          setAsset(doc.data().asset)
          setSerial(doc.data().serial)
          setCondition(doc.data().condition)
          setLocation(doc.data().location)
          setCheckoutTo(doc.data().checkoutTo)
          setNotes(doc.data().notes)
        })
  }, [props.edit])

  const fieldsets = [
    {
      name: 'Name',
      id: 'name',
      value: name,
      function: e => setName(e.target.value)
    },
    {
      name: 'Asset',
      id: 'asset',
      value: asset,
      function: e => setAsset(e.target.value)
    },
    {
      name: 'Serial',
      id: 'serial',
      value: serial,
      function: e => setSerial(e.target.value)
    },
    {
      name: 'Condition',
      type: 'select',
      id: 'condition',
      value: condition,
      function: e => setCondition(e.target.value),
      children: (
        <>
          <option value="New">New</option>
          <option value="Used">Used</option>
          <option value="Bad">Bad</option>
          <option value="Inoperable">Inoperable</option>
        </>
      )
    },
    {
      name: 'Location',
      id: 'location',
      value: location,
      function: e => setLocation(e.target.value)
    },
    {
      name: 'Checkout to',
      id: 'checkoutTo',
      value: checkoutTo,
      function: e => setCheckoutTo(e.target.value)
    },
    {
      name: 'Notes',
      id: 'notes',
      value: notes,
      function: e => setNotes(e.target.value)
    }
  ]

  const submit = e => {
    e.preventDefault()
    db()
      .collection('assets')
      .doc(serial)
      .set({
        name: name,
        asset: asset,
        serial: serial,
        condition: condition,
        location: location,
        checkoutTo: checkoutTo,
        notes: notes
      })
      .then(() => {
        setStatusShown(true)
        setStatusMessage('Asset successfully created')
        setStatusClass(styles.formFieldsetStatusSuccess)
        setName('')
        setAsset('')
        setSerial('')
        setCondition('')
        setLocation('')
        setCheckoutTo('')
        setNotes('')
      })
      .catch(err => {
        setStatusShown(true)
        setStatusMessage(`An error occurred: ${err}`)
        setStatusClass(styles.formFieldsetStatusError)
      })
  }

  return (
    <form className={styles.form}>
      {fieldsets.map(item => (
        <fieldset key={item.id} className={styles.formFieldset}>
          <label htmlFor={item.id} className={styles.formFieldsetLabel}>
            {item.name}
          </label>
          {item.type === 'select' ? (
            <select
              id={item.id}
              className={styles.formFieldsetInput}
              placeholder={item.name}
              value={item.value}
              onChange={item.function}
            >
              {item.children}
            </select>
          ) : (
            <input
              id={item.id}
              className={styles.formFieldsetInput}
              placeholder={item.name}
              value={item.value}
              onChange={item.function}
            />
          )}
        </fieldset>
      ))}
      {asset && serial !== '' && (
        <fieldset className={styles.formFieldset}>
          <button className={styles.formFieldsetButton} onClick={submit}>
            Submit
          </button>
        </fieldset>
      )}
      {statusShown && (
        <fieldset className={styles.formFieldset}>
          <p className={`${styles.formFieldsetStatus} ${statusClass}`}>{statusMessage}</p>
        </fieldset>
      )}
    </form>
  )
}

export default Create
