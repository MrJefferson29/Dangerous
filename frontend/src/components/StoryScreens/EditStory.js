import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import Loader from "../GeneralScreens/Loader";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from "react-icons/ai";
import "../../Css/EditStory.css";
import { Row, Col, Container } from "react-bootstrap";

const EditStory = () => {
  const { config } = useContext(AuthContext);
  const slug = useParams().slug;
  const imageEl = useRef(null);
  const [loading, setLoading] = useState(true);
  const [story, setStory] = useState({});
  const [image, setImage] = useState("");
  const [previousImage, setPreviousImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [insurrance, setInsurrance] = useState("");
  const [slider, setSlider] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getStoryInfo = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `/story/editStory/${slug}`,
          config,
      { withCredentials: true }

        );
        setStory(data.data);
        setTitle(data.data.title);
        setContent(data.data.content);
        setStatus(data.data.status);
        setAddress(data.data.address);
        setInsurrance(data.data.insurrance);
        setSlider(data.data.slider);
        setImage(data.data.image);
        setPreviousImage(data.data.image);
        setLoading(false);
      } catch (error) {
        navigate("/");
      }
    };
    getStoryInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("content", content);
    formdata.append("image", image);
    formdata.append("status", status);
    formdata.append("insurrance", insurrance);
    formdata.append("address", address);
    formdata.append("slider", slider);
    formdata.append("previousImage", previousImage);

    try {
      const { data } = await axios.put(
        `/story/${slug}/edit`,
        formdata,
        config,
      { withCredentials: true }

      );

      setSuccess("Edit Story successfully ");

      setTimeout(() => {
        navigate("/tracking");
      }, 2500);
    } catch (error) {
      setTimeout(() => {
        setError("");
      }, 4500);
      setError(error.response.data.error);
    }
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <div className="Inclusive-editStory-page ">
          <form onSubmit={handleSubmit} className="editStory-form">
            {error && <div className="error_msg">{error}</div>}
            {success && (
              <div className="success_msg">
                <span>{success}</span>
                <Link to="/">Go home</Link>
              </div>
            )}
            <h2>Edit the package {story.content}</h2>
            <Row>
              <Col md="6">
                <input
                  className="inp"
                  type="text"
                  required
                  placeholder="Tracking ID"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  autoFocus={true}
                />

                <input
                  className="inp"
                  type="text"
                  required
                  placeholder="Package Name"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                />
                <input
                  className="inp"
                  type="text"
                  placeholder="Edit the Insurrance fee"
                  onChange={(e) => setInsurrance(e.target.value)}
                  value={insurrance}
                />
              </Col>
              <Col md="6">
              <input
              type="text"
              required
              placeholder="Receiver's Address"
              className="inp"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />

                <select
                  className="inp"
                  id="status"
                  name="status"
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                >
                  <option value="">Select the current status...</option>
                  <option value="pending">Pending</option>
                  <option value="Delivered">Delivered</option>
                  <option value="progress">In Progress</option>
                  <option value="paused">Paused</option>
                  <option value="Denied">Denied</option>
                </select>
                <br />
                <br />

                <input
              className="slider"
              placeholder="how far is the package"
              type="range"
              id="slider"
              min="1"
              max="100"
              step="1"
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
            />
              </Col>
            </Row>
           <Col md='6'>
            <div class="currentlyImage">
              <div class="absolute">Currently Image</div>
              <img
                src={`/storyImages/${previousImage}`}
                alt="storyImage"
              />
            </div>
            </Col>
            <div class="StoryImageField">
              <AiOutlineUpload />
              <div class="txt">
                {image === previousImage
                  ? "    Change the image in your story "
                  : image.name}
              </div>
              <input
                name="image"
                type="file"
                ref={imageEl}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </div>

            <button type="submit" className="editStory-btn">
              Edit Story{" "}
            </button>
          </form>
        </div>
      )}
    </Container>
  );
};

export default EditStory;
