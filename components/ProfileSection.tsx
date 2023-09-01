import Image from "next/image";
import React from "react";

import Pic from "../assets/images/profile.png";
import { profileDetails } from "../constants";

const ProfileSection = () => {
  return (
    <section className="grid-item gap-5 md:gap-6 mb-10 items-center">
      <div className="col-span-1">
        <Image
          src={Pic}
          alt={profileDetails.name}
          className="!w-[30%] lg:!w-full rounded-full"
        />
      </div>
      <div className="col-span-3">
        <h1 className="text-white text-xl">{profileDetails.name}</h1>
        <p>{profileDetails.jobTitle}</p>
        <a
          href={`mailto:${profileDetails.email}`}
          className="text-neutral-500 underline-offset-3 hover:underline"
        >
          {profileDetails.email}
        </a>
      </div>
    </section>
  );
};

export default ProfileSection;
