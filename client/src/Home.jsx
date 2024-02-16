
import React, { useState } from "react";

const Home = () => {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-8 col-lg-6">
            <h2 className="text-center mb-3">Welcome to the home page</h2>
            <h2>Add Image:</h2>
            <input
              type="file"
              className="form-control"
              onChange={handleChange}
            />
            {file && (
              <img src={file} alt="Uploaded" className="img-fluid mt-3" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;