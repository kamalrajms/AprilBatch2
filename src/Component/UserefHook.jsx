import React, { useRef, useState, useEffect } from "react";

export default function UserefHook() {
  // eg1
  const inputRef = useRef();

  const focusinput = () => {
    inputRef.current.focus();
  };

  //   eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  //   eg3
  const [newImage, setNewImage] = useState(true);
  const [imageURL, setImageURL] = useState("");

  const imgRef = useRef(0);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setNewImage(false);
    }
  };

  return (
    <div>
      {/* eg1 */}
      <nav>
        <input type="text" ref={inputRef} placeholder="enter a name" />
        <button onClick={focusinput}>Focus input</button>
      </nav>
      {/* eg2 */}
      <nav>
        <h2>Timer:{sec}</h2>
        <button onClick={() => clearInterval(intervalRef.current)}>
          {" "}
          stop
        </button>
      </nav>
      {/* eg3 */}
      <nav>
        <input
          type="file"
          ref={imgRef}
          accept="image/"
          hidden
          onChange={handleImage}
        />
        {newImage ? (
          <div className="Image-box" onClick={() => imgRef.current.click()}>
            {" "}
            Upload img...
          </div>
        ) : (
          <img
            className="org-img"
            onClick={() => imgRef.current.click()}
            src={imageURL}
            alt="img"
          />
        )}
      </nav>
    </div>
  );
}
