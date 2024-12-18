'use client';

import { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '@/app/src/aws-exports'

export default function ConfigureAmplify() {
  useEffect(() => {
    Amplify.configure(awsExports);
    console.log('Amplify configured with:', awsExports);
  }, []);

  return null; // This component does not render anything
}
