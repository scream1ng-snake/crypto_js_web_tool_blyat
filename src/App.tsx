import React from 'react';
import { Form, Card, Container, Col, Row, Button } from 'react-bootstrap';
import './App.css';

import * as CryptoJS from 'crypto-js';

function App() {
  const [ 
    encInputText,
    setEncInputText
  ] = React.useState('')

  const [
    encOutputText,
    setEncOutputText
  ] = React.useState('')

  const [
    decInputText,
    setDecInputText
  ] = React.useState('')

  const [
    decKey,
    setDecKey
  ] = React.useState('')
  const [
    encKey,
    setEncKey 
  ] = React.useState('')

  const [
    decOutputText,
    setDecOutputText
  ] = React.useState('')
  const [
    decOutputEncoding,
    setDecOutputEncoding 
  ] = React.useState('Utf8')
  const [
    encOutputEncoding,
    setEncOutputEncoding 
  ] = React.useState('Base64')

  const encrypt = () => {
    try {
      let result = ''
      if (!encInputText || encInputText.trim().length === 0) {
        result = '[Crypto] - Введите текст'
      } else {
        // @ts-ignore
        result = CryptoJS[encAlg]
          .encrypt(encInputText, encKey)
          .toString();
      }
      result.length > 0
        ? setEncOutputText(result)
        : setEncOutputText('[Crypto] - Не удалось шифровать');
    } catch (err) {
      console.log('\n \n \n')
      console.error(`[Crypto] - Error: \n ${err}`)
      console.log('\n \n \n')
      setEncOutputText(`[Crypto] - Error: \n ${err}`)
    }
  }
  const decrypt = () => {
    try {
      let result = ''
      if (!decInputText || decInputText.trim().length === 0) {
        result = '[Crypto] - Введите текст'
      } else {
        // @ts-ignore
        result = CryptoJS[alg]
          .decrypt(decInputText, decKey)
          // @ts-ignore
          .toString(CryptoJS.enc[decOutputEncoding]);
      }
      result.length > 0
        ? setDecOutputText(result)
        : setDecOutputText('[Crypto] - Не удалось дешифровать');
    } catch (err) {
      console.log('\n \n \n')
      console.error(`[Crypto] - Error: \n ${err}`)
      console.log('\n \n \n')
      setDecOutputText(`[Crypto] - Error: \n ${err}`)
    }
  }

  const [alg, setAlg] = React.useState('AES')
  const [encAlg, setEncAlg] = React.useState('AES')
  return (
    <Container className='mt-3'>
      <Row>
        <Col>
        <Card>
            <Card.Header>
              <Card.Title>Encrypting</Card.Title>
            </Card.Header>
            <Card.Body>


              <Form.Group as={Row} className="mb-3" controlId="inputEncText">
                <Form.Label column sm="3">
                  Input:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type='text'
                    as='textarea'
                    value={encInputText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEncInputText(e.target.value)
                    }
                  />
                </Col>
              </Form.Group>



              <Form.Group as={Row} className="mb-3" controlId="selectAlgEnc">
                <Form.Label column sm="3">
                  Alg:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    as={"select"}
                    value={encAlg}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEncAlg(e.target.value)
                    }
                  >
                    {Object.keys(CryptoJS.algo).map((alg) =>
                      <option value={alg} key={alg}>
                        {alg}
                      </option>
                    )}
                  </Form.Control>
                </Col>
              </Form.Group>


              <Form.Group as={Row} className="mb-3" controlId="inputText">
                <Form.Label column sm="3">
                  256key:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type='text'
                    value={encKey}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEncKey(e.target.value)
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="selectAlg">
                <Form.Label column sm="3">
                  Out enc.:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    as={"select"}
                    value={encOutputEncoding}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEncOutputEncoding(e.target.value)
                    }
                  >
                    {Object.keys(CryptoJS.enc).map((enc) =>
                      <option value={enc} key={enc}>
                        {enc}
                      </option>
                    )}
                  </Form.Control>
                </Col>
              </Form.Group>



              <Button className='mb-3' onClick={encrypt}>Encrypt</Button>

              <Form.Group as={Row} className="mb-3" controlId="outputText">
                <Form.Label column sm="3">
                  Output:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type='text'
                    as='textarea'
                    value={encOutputText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEncOutputText(e.target.value)
                    }
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title>Decrypting</Card.Title>
            </Card.Header>
            <Card.Body>


              <Form.Group as={Row} className="mb-3" controlId="inputText">
                <Form.Label column sm="3">
                  Input:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type='text'
                    as='textarea'
                    value={decInputText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setDecInputText(e.target.value)
                    }
                  />
                </Col>
              </Form.Group>



              <Form.Group as={Row} className="mb-3" controlId="selectAlg">
                <Form.Label column sm="3">
                  Alg:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    as={"select"}
                    value={alg}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAlg(e.target.value)
                    }
                  >
                    {Object.keys(CryptoJS.algo).map((alg) =>
                      <option value={alg} key={alg}>
                        {alg}
                      </option>
                    )}
                  </Form.Control>
                </Col>
              </Form.Group>


              <Form.Group as={Row} className="mb-3" controlId="inputText">
                <Form.Label column sm="3">
                  256key:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type='text'
                    value={decKey}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setDecKey(e.target.value)
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="selectAlg">
                <Form.Label column sm="3">
                  Out enc.:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    as={"select"}
                    value={decOutputEncoding}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setDecOutputEncoding(e.target.value)
                    }
                  >
                    {Object.keys(CryptoJS.enc).map((enc) =>
                      <option value={enc} key={enc}>
                        {enc}
                      </option>
                    )}
                  </Form.Control>
                </Col>
              </Form.Group>



              <Button className='mb-3' onClick={decrypt}>Decrypt</Button>

              <Form.Group as={Row} className="mb-3" controlId="outputText">
                <Form.Label column sm="3">
                  Output:
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type='text'
                    as='textarea'
                    value={decOutputText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setDecOutputText(e.target.value)
                    }
                  />
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
