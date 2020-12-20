import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../../db/services'
import Data from '../../../components/Asset/Data'
import Asset from '../../../components/Asset'
import Wrapper from '../../../components/Wrapper'

const LoggedIn = () => {
  let [assetList, setAssetList] = useState([])

  useEffect(() => {
    db()
      .collection('assets')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setAssetList(querySnapshot.docs.map(doc => doc.data()))
        })
      })
  }, [])

  return (
    <Wrapper title="Assets">
      <Asset>
        {assetList.map(assetDetails => (
          <Data key={assetDetails.serial} assetDetails={assetDetails} />
        ))}
      </Asset>
    </Wrapper>
  )
}

export default LoggedIn
