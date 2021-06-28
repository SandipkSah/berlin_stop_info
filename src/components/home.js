import React, { useRef, useState, useAuth } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Home() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const { login } = useAuth()
//   const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
//   const history = useHistory()

  async function handleSubmit(e) {
      console.log("enter handle function")
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Direction</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>From</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>To</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Find best path
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

