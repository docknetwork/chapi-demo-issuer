const credSov = {
  id: 'https://example.com/credentials/789',
  type: ['VerifiableCredential', 'AlumniCredential'],
  credentialSubject: [{
    id: 'did:sov:WRfXPg8dantKVubE3HX8pw',
    alumniOf: 'Some Other Example University'
  }],
  issuanceDate: '2020-06-11T19:27:45.253Z',
  issuer: 'did:dock:5ENAMn7nCVtrnXRVBSptnx6m4MrzQRKiY5AyydigCDzwPXhN',
  '@context': [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  proof: {
    type: 'Ed25519Signature2018',
    created: '2020-06-15T21:29:58Z',
    jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..ujnSumbSN7nFWjQerlQ3D41QwqQKDWAhWUo2GhbO91srK_fbG0PIjFXHM7P3lzsWnmffpwb_WzS4_VFHygXWiQ',
    proofPurpose: 'assertionMethod',
    verificationMethod: 'did:dock:5ENAMn7nCVtrnXRVBSptnx6m4MrzQRKiY5AyydigCDzwPXhN#keys-1'
  }
};

const credBtcr = {
  id: 'https://example.com/credentials/456',
  type: ['VerifiableCredential', 'AlumniCredential'],
  credentialSubject: [{
    id: 'did:btcr:xz35-jznz-q9yu-ply',
    alumniOf: 'Another Example University'
  }],
  issuanceDate: '2020-06-11T19:26:38.423Z',
  issuer: 'did:dock:5ENAMn7nCVtrnXRVBSptnx6m4MrzQRKiY5AyydigCDzwPXhN',
  '@context': ['https://www.w3.org/2018/credentials/v1',
    'https://www.w3.org/2018/credentials/examples/v1'
  ],
  proof: {
    type: 'Ed25519Signature2018',
    created: '2020-06-15T21:29:35Z',
    jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YOTAxRTGk0BkMUzf7MnpPjFMqyk3ZFA94nRWRXCjEFbhsKqEMRFy1n1xfgE-1oza-OZ9FkZnQfJyrRgfOEJ0iQ',
    proofPurpose: 'assertionMethod',
    verificationMethod: 'did:dock:5ENAMn7nCVtrnXRVBSptnx6m4MrzQRKiY5AyydigCDzwPXhN#keys-1'
  }
};

const credEthr = {
  id: 'https://example.com/credentials/123',
  type: ['VerifiableCredential', 'AlumniCredential'],
  credentialSubject: [{
    id: 'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6',
    alumniOf: 'Example University'
  }],
  issuanceDate: '2020-06-11T19:24:19.426Z',
  issuer: 'did:dock:5ENAMn7nCVtrnXRVBSptnx6m4MrzQRKiY5AyydigCDzwPXhN',
  '@context': ['https://www.w3.org/2018/credentials/v1',
    'https://www.w3.org/2018/credentials/examples/v1'
  ],
  proof: {
    type: 'Ed25519Signature2018',
    created: '2020-06-15T21:28:55Z',
    jws: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Mvy9SYUJk1rdA7gOQB222H-weZMCCxL6xveT1vyd4xR6VApfYypLewVALAY3FphZulJMh52MBekxmfT9urJDiQ',
    proofPurpose: 'assertionMethod',
    verificationMethod: 'did:dock:5ENAMn7nCVtrnXRVBSptnx6m4MrzQRKiY5AyydigCDzwPXhN#keys-1'
  }
};
