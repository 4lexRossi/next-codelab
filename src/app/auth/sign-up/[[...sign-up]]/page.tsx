import { SignUp } from '@clerk/nextjs';

export default function SignInPage() {
  return <SignUp signInUrl='/auth/sign-in' />
}