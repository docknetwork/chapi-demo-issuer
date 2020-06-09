const credSov = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "https://example.com/credentials/1",
    "type": [
        "VerifiableCredential",
        "AlumniCredential"
    ],
    "credentialSubject": [
        {
            "id": "did:sov:WRfXPg8dantKVubE3HX8pw",
            "alumniOf": "Some Example University"
        }
    ],
    "issuanceDate": "2020-06-09T22:38:11.722Z",
    "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-06-09T22:38:13Z",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..9g0esveE2v86QpQ7hMBx5uqVLvtB5-GTp52WUmTu0Dyqu6pdYnupzd4i686lXRAujOQu-npZF3zwjfqBlCWRAw",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:dock:5F6Edb9DMoEnZmePEtDZZJfxd9gwgjvuiR1K9WH95xog8JLL#keys-1"
    },
    "issuer": "did:dock:5F6Edb9DMoEnZmePEtDZZJfxd9gwgjvuiR1K9WH95xog8JLL"
}

const credBtcr = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "https://example.com/credentials/2",
    "type": [
        "VerifiableCredential",
        "AlumniCredential"
    ],
    "credentialSubject": [
        {
            "id": "did:btcr:xz35-jznz-q9yu-ply",
            "alumniOf": "Some Other Example University"
        }
    ],
    "issuanceDate": "2020-06-09T22:38:16.026Z",
    "proof": {
        "type": "EcdsaSecp256k1Signature2019",
        "created": "2020-06-09T22:38:16Z",
        "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..MEQCIHPFch_dC5Bk81ExLV6FpNJ9ma-vtb7bSPqxmCeLJ0qZAiBQYn8rTlOjWUm8yuY-zKRAz2hJbeB7aSIb9GVf4o0UxQ",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:dock:5Cdzps87rBxwVDdSRukR7QrU5KmPMURfzdwpKug3s3tiZsUg#keys-1"
    },
    "issuer": "did:dock:5Cdzps87rBxwVDdSRukR7QrU5KmPMURfzdwpKug3s3tiZsUg"
}

const credEthr = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "https://example.com/credentials/3",
    "type": [
        "VerifiableCredential",
        "AlumniCredential"
    ],
    "credentialSubject": [
        {
            "id": "did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6",
            "alumniOf": "Another Example University"
        }
    ],
    "issuanceDate": "2020-06-09T22:38:20.118Z",
    "proof": {
        "type": "Sr25519Signature2020",
        "created": "2020-06-09T22:38:21Z",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..yB1f-pa34ao4lwT9iJIuvIZsVrDe_I6tVjljjBeG8ngEAc43x6oYKxbnRqdRPMeUsEQo95_hxmeUynznqgPsjA",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:dock:5E5Bbwi6ro1ntPK1h3QYUt3RUcp1CYQjUGziDpHtbHTjk23g#keys-1"
    },
    "issuer": "did:dock:5E5Bbwi6ro1ntPK1h3QYUt3RUcp1CYQjUGziDpHtbHTjk23g"
}
