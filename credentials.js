const credSov = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "https://example.com/credentials/789",
    "type": [
        "VerifiableCredential",
        "AlumniCredential"
    ],
    "credentialSubject": [
        {
            "id": "did:sov:WRfXPg8dantKVubE3HX8pw",
            "alumniOf": "Some Other Example University"
        }
    ],
    "issuanceDate": "2020-06-11T19:27:45.253Z",
    "proof": {
        "type": "Sr25519Signature2020",
        "created": "2020-06-11T19:27:46Z",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..KGI3lqq4GiHEC3yYrMCzYBKvkyJmDxuowpkPW_JtlGPjhxgvfsYg7HEkUxaq8DEsvk1mRBlfwDjcinGPfwoagQ",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:dock:5EGVpSSfCaovaVazFjbnmVX7oCG1HHxr2PnVZtnNjSfrKrh3#keys-1"
    },
    "issuer": "did:dock:5EGVpSSfCaovaVazFjbnmVX7oCG1HHxr2PnVZtnNjSfrKrh3"
}

const credBtcr = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "https://example.com/credentials/456",
    "type": [
        "VerifiableCredential",
        "AlumniCredential"
    ],
    "credentialSubject": [
        {
            "id": "did:btcr:xz35-jznz-q9yu-ply",
            "alumniOf": "Another Example University"
        }
    ],
    "issuanceDate": "2020-06-11T19:26:38.423Z",
    "proof": {
        "type": "Sr25519Signature2020",
        "created": "2020-06-11T19:26:39Z",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..IHxlYRTthxa4LiAeCHlnyIUgkDk_IVSUJxyjUC_mQjsMYnnDM7bamnn-jLWftOPiLGIRJESIDrU3-0wb6Wtxig",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:dock:5EGVpSSfCaovaVazFjbnmVX7oCG1HHxr2PnVZtnNjSfrKrh3#keys-1"
    },
    "issuer": "did:dock:5EGVpSSfCaovaVazFjbnmVX7oCG1HHxr2PnVZtnNjSfrKrh3"
}

const credEthr = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "https://example.com/credentials/123",
    "type": [
        "VerifiableCredential",
        "AlumniCredential"
    ],
    "credentialSubject": [
        {
            "id": "did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6",
            "alumniOf": "Example University"
        }
    ],
    "issuanceDate": "2020-06-11T19:24:19.426Z",
    "proof": {
        "type": "Sr25519Signature2020",
        "created": "2020-06-11T19:24:20Z",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..ihvWf7Ml-2nON6YNJLUc8MP-eJHLJ6nr7HmyNAVteXuOQv_tUJxBNkKS_x2JU3KfqQ0I8nJzmwLXRxaEvVBhiA",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:dock:5EGVpSSfCaovaVazFjbnmVX7oCG1HHxr2PnVZtnNjSfrKrh3#keys-1"
    },
    "issuer": "did:dock:5EGVpSSfCaovaVazFjbnmVX7oCG1HHxr2PnVZtnNjSfrKrh3"
}
