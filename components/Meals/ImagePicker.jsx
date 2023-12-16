"use client";
import React, { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

function ImagePicker({ name, label }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  const handleImagePicker = () => {
    imageInput.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt='The image selected by the user.'
              fill
            />
          )}
        </div>
        <input
          ref={imageInput}
          className={classes.input}
          type='file'
          id='image'
          accept='image/png, image/jpeg'
          name={name}
          onChange={handleImageChange}
        />
        <button
          onClick={handleImagePicker}
          className={classes.button}
          type='button'
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
