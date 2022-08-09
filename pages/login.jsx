import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { emailIcon, lockIcon } from "../components/icons";
import SocialLogin from "../components/SocialLogin";
import Dashboard from "./dashboard";
const Login = () => {
  const { data: session, status } = useSession();
  useEffect(() => {

    if (session && status !== 'loading') {
      toast(
        <div className="flex items-center gap-2 p-0 m-0">
          <Image
            className="rounded-full w-10 h-10"
            height="40"
            width="40"
            src={session.user.image}
            alt={session.user.name}
          />
          <h2>{session.user.name} logged in.</h2>
        </div>
      )
    }
  }, [session, status]);
  if (session === null) {
    return (
      <>
        <Head>
          <title>Login to your account</title>
        </Head>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full sm:w-8/12 lg:w-6/12 xl:w-4/12 max-w-md mx-auto text-gray-400 shadow-xl my-10">
            <SocialLogin />
            <div className="bg-gray-100 rounded-b-lg py-12 px-10 lg:px-16">
              <p className="text-center  font-light">
                Or sign in with credentials
              </p>
              <form className="mt-6">
                <div className="relative">
                  <input
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 bg-white text-gray-500 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    {emailIcon}
                  </div>
                </div>
                <div className="relative mt-3">
                  <input
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 bg-white text-gray-500 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    {lockIcon}
                  </div>
                </div>
                <p className="text-center text-sm my-4 font-light">
                  Don&apos;t have an account? <span className="text-[#10B981]"><Link href="/register">register here</Link></span>
                </p>
                <div className="flex items-center justify-center mt-8">
                  <button className="text-white py-2 px-4 uppercase rounded bg-[#10B981] hover:bg-[#0ea371] shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>)
  }



  if (status === 'authenticated') {
    return <Dashboard />
  }
};

export default Login;
