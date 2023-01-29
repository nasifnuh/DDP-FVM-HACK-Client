import React, { useState } from "react";

import Layout from "../../templates/layout";
import TextField from "../../templates/textField";

const Index = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");
  const [bio, setBio] = useState("");

  return (
    <Layout>
      <div className="w-full">
        <div className="my-3 text-3xl font-medium">Profile</div>
        <div className="mt-10 flex w-full gap-5">
          <div className="w-3/4 rounded-lg bg-[#f3f4f6] p-6">
            <TextField
              containerClassNames="w-full mb-5"
              disabled={true}
              title="Profile Id"
              value="abc@123"
            />
            <TextField
              containerClassNames="w-full mb-5"
              onChangeHandler={(e) => setName(e.target.value)}
              title="Name"
              value={name}
            />
            <TextField
              containerClassNames="w-full mb-5"
              onChangeHandler={(e) => setLocation(e.target.value)}
              title="Location"
              value={location}
            />
            <TextField
              containerClassNames="w-full mb-5"
              onChangeHandler={(e) => setWebsite(e.target.value)}
              title="Website"
              value={website}
            />
            <TextField
              containerClassNames="w-full mb-5"
              onChangeHandler={(e) => setTwitter(e.target.value)}
              title="Twitter"
              value={twitter}
            />
            <TextField
              containerClassNames="w-full"
              onChangeHandler={(e) => setBio(e.target.value)}
              title="Bio"
              textArea={true}
              value={bio}
            />
          </div>
          <div className="h-max w-1/4 rounded-lg bg-[#f3f4f6] p-6">
            <p>
              <strong>Reputation score: </strong>0
            </p>
            <p>
              <strong>Earnings: </strong>$0
            </p>
            <p>
              <strong>Revenue share: </strong>0.0%
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
