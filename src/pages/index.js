import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"
import { useObjectVal } from "react-firebase-hooks/database"

export default function Home() {
  // const [data] = useState(null)
  const [data, isLoading] = useObjectVal(firebase.database().ref("data"))

  return <div>Lorem Ipsum{JSON.stringify(data)}</div>
}
