"use client";
import { useDispatch } from "react-redux";
import { toggleProfile } from "@/redux/slices/profileSlice";
import Link from "next/link";
import User from "@/app/user/page";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col popup'>
      <div className='items-end'>
        <button className="text-white" onClick={() => dispatch(toggleProfile()) }>
        ✖
        </button>
      </div>

      <div className='flex flex-col gap-18 justify-center items-center'>
        <h1 className='head'>Choose your Profile!!</h1>

        <div className='flex flex-row gap-48 z-20'>
          <Link href="/user">
            <div className="profile-div flex flex-col gap-5 bg justify-center items-center">
                <h3 className="p-head">USER</h3>
                <p className="p-content"> User can access Event Certificates </p>
            </div>
          </Link>

          <Link href="/issuer">
            <div className="profile-div flex flex-col gap-5 bg justify-center items-center">
                <h3 className="p-head">ISSUER</h3>
                <p className="p-content"> Issuer can create Event Certificates </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
