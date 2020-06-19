const permanentResidentCard = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/citizenship/v1"
  ],
  "type": [
    "VerifiableCredential",
    "PermanentResidentCard"
  ],
  "credentialSubject": {
    "id": "did:key:z6Mkte9e5E2GRozAgYyhktX7eTt9woCR4yJLnaqC88FQCSyY",
    "type": [
      "PermanentResident",
      "Person"
    ],
    "givenName": "JOHN",
    "familyName": "SMITH",
    "gender": "Male",
    "image": "data:image/png;base64,iVBORw0KGgo...kJggg==",
    "residentSince": "2015-01-01",
    "lprCategory": "C09",
    "lprNumber": "000-000-204",
    "commuterClassification": "C1",
    "birthCountry": "Bahamas",
    "birthDate": "1958-08-17"
  },
  "issuer": "did:web:vc.transmute.world",
  "issuanceDate": "2020-04-27T10:18:22Z",
  "identifier": "83627465",
  "name": "Permanent Resident Card",
  "description": "Government of Example Permanent Resident Card.",
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2019-12-11T03:50:55Z",
    "verificationMethod": "did:web:vc.transmute.world#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..KLEEhlIsQjyN4CJS7HM8IFAzK9HyDbTP6Bm28rVMVCAF8Tv508im027zjxVf1fBhDFnR-d06rN5j-ShiGvgEBA"
  }
};

const universityDegree = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.gov/credentials/3732#a3de9c34-5c95-4110-af13-53a749a07fd5",
  "type": [
    "VerifiableCredential",
    "universityDegree"
  ],
  "issuer": "did:key:z6MktT2KTXK3So7Eskmvn96QccaVCGeLjFtpuGrTAY24Ls9X",
  "issuanceDate": "2020-03-10T04:24:12.164Z",
  "credentialSubject": {
    "id": "did:key:z6MktT2KTXK3So7Eskmvn96QccaVCGeLjFtpuGrTAY24Ls9X",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-04-23T16:33:25Z",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..X_lVFbbB-MHJ6fEE9C8RcuJi2IHBjgKwhK5QVqOPI-lXbv6aPHUgsLM9JtKTKSBvP303YUW3qTzjtOI7P539Cg",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:key:z6MktT2KTXK3So7Eskmvn96QccaVCGeLjFtpuGrTAY24Ls9X#z6MktT2KTXK3So7Eskmvn96QccaVCGeLjFtpuGrTAY24Ls9X"
  }
};
