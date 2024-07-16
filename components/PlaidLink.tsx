import React, {useCallback, useEffect, useState} from 'react'
import { Button } from './ui/button'
import {PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink} from 'react-plaid-link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


const PlaidLink = ({user, variant}: PlaidLinkProps) => {
    const router = useRouter()

    const [token, setToken] = useState('')
  return (
    <div>
      
    </div>
  )
}

export default PlaidLink
