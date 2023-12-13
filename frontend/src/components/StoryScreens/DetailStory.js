import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../../Css/DetailStory.css";
import Loader from "../GeneralScreens/Loader";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit, FiArrowLeft } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BsBookmarkPlus, BsThreeDots, BsBookmarkFill } from "react-icons/bs";
import CommentSidebar from "../CommentScreens/CommentSidebar";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Slider.css";
import {
  faHome,
  faLaptopHouse
} from "@fortawesome/free-solid-svg-icons";
import { FaArrowAltCircleLeft } from "react-icons/fa";



const DetailStory = () => {
  const [likeStatus, setLikeStatus] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [activeUser, setActiveUser] = useState({});
  const [story, setStory] = useState({});
  const [storyLikeUser, setStoryLikeUser] = useState([]);
  const [sidebarShowStatus, setSidebarShowStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const slug = useParams().slug;
  const [storyReadListStatus, setStoryReadListStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getDetailStory = async () => {
      setLoading(true);
      var activeUser = {};
      try {
        const { data } = await axios.get("https://dangerous-eight.vercel.app/auth/private", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        activeUser = data.user;

        setActiveUser(activeUser);
      } catch (error) {
        setActiveUser({});
      }

      try {
        const { data } = await axios.post(`https://dangerous-eight.vercel.app/story/${slug}`, { activeUser });
        setStory(data.data);
        setLikeStatus(data.likeStatus);
        setLikeCount(data.data.likeCount);
        setStoryLikeUser(data.data.likes);
        setLoading(false);

        const story_id = data.data._id;

        if (activeUser.readList) {
          if (!activeUser.readList.includes(story_id)) {
            setStoryReadListStatus(false);
          } else {
            setStoryReadListStatus(true);
          }
        }
      } catch (error) {
        setStory({});
        navigate("/not-found");
      }
    };
    getDetailStory();
  }, [slug, setLoading]);

  const handleLike = async () => {
    setTimeout(() => {
      setLikeStatus(!likeStatus);
    }, 1500);

    try {
      const { data } = await axios.post(
        `https://dangerous-eight.vercel.app/story/${slug}/like`,
        { activeUser },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setLikeCount(data.data.likeCount);
      setStoryLikeUser(data.data.likes);
    } catch (error) {
      setStory({});
      localStorage.removeItem("authToken");
      navigate("/");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Do you want to delete this post")) {
      try {
        await axios.delete(`https://dangerous-eight.vercel.app/story/${slug}/delete`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editDate = (createdAt) => {
    const d = new Date(createdAt);
    var datestring =
      d.toLocaleString("eng", { month: "long" }).substring(0, 3) +
      " " +
      d.getDate();
    return datestring;
  };

  const addStoryToReadList = async () => {
    try {
      const { data } = await axios.post(
        `https://dangerous-eight.vercel.app/user/${slug}/addStoryToReadList`,
        { activeUser },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setStoryReadListStatus(data.status);

      document.getElementById("readListLength").textContent =
        data.user.readListLength;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="Inclusive-detailStory-page">
            <div className="top_detail_wrapper">
              <div className="story-general-info">
                <ul>
                <Link to={"/"}>
                <FaArrowAltCircleLeft style={{fontSize: "1.8rem", fontWeight: '800', color: 'ButtonText'}}/>
              </Link>
                </ul>

                {activeUser &&
                story.author &&
                story.author._id === activeUser._id ? (
                  <div className="top_story_transactions">
                    <Link
                      className="editStoryLink"
                      to={`/story/${story.slug}/edit`}
                    >
                      <FiEdit />
                    </Link>
                    <span className="deleteStoryLink" onClick={handleDelete}>
                      <RiDeleteBin6Line />
                    </span>
                  </div>
                ) : null}
              </div>
            </div>

            <Row>
              <Row className="story-content">
                <Col md="6" style={{ marginTop: "15px" }}>
                  <div className="story-banner-img">
                    <img
                      src={`https://dangerous-eight.vercel.app/storyImages/${story.image}`}
                      alt={story.title}
                    />
                  </div>
                </Col>
                <Col md="5" style={{ marginTop: "15px" }}>
                  <center>
                    <p
                      className="name"
                      style={{ fontSize: "1.3rem", fontWeight: "700", fontFamily: 'Gaqire' }}
                    >
                      <font>{story.content}</font>
                    </p>
                  </center>
                  <p
                    className="name"
                    style={{ fontSize: "1.3rem", fontWeight: "700" }}
                  >
                    Courier ID:{" "}
                    <font
                      style={{
                        fontFamily: "Gaqire",
                        fontSize: "1.5rem",
                        letterSpacing: "5px",
                        fontWeight: "800",
                      }}
                    >
                      {story.title}
                    </font>
                    {story.age}
                  </p>
                  <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                    Current Status:{" "}
                    <font
                      className="hush"
                      style={{
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                      }}
                    >
                      {story.status}
                    </font>
                  </p>
                  <p style={{ fontSize: "1.1rem" }}>
                    The package{" "}
                    <font style={{ fontWeight: "700", fontFamily: 'Gaqire', letterSpacing: '1px' }}>#{story.title}</font> is
                    to be delivered and signed by{" "}
                    <font style={{ fontWeight: "700" }}>{story.address}. </font>
                    Please ensure to contact us if any of the given information
                    is changed or incorrect, also contact us to provide any information that
                    will facilitate the delivery of your packge
                  </p>
                  <p style={{ fontSize: "1.1rem" }}>
                    As in our policy, an insurrance fee of{" "}
                    <font>{story.insurrance}</font> is to be paid to the courier
                    service. Ensuring the safe delivery of your package is our
                    utmost priority. The insurance fee is a nominal investment
                    towards safeguarding your shipment throughout its journey.
                    This helps mitigate any unforeseen circumstances, providing
                    comprehensive coverage and peace of mind, ensuring that your
                    package arrives securely and intact at its destination.
                  </p>
                  <div>
                    <div className="slider-container">
                      <FontAwesomeIcon
                        icon={faLaptopHouse}
                        style={{
                          color: "#1a1919",
                          fontSize: "1.7rem",
                          padding: "7px",
                        }}
                      />
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={story.slider}
                        className="slider"
                        id="slider"
                      />
                      <FontAwesomeIcon
                        icon={faHome}
                        style={{
                          color: "#1a1919",
                          fontSize: "1.7rem",
                          padding: "7px",
                        }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Row>
          </div>
        </>
      )}
    </Styles>
  );
};

export default DetailStory;

const Styles = styled.div`
  .App {
    height: 75vh;
    width: auto;
  }

  .map-container {
    height: 100%;
    width: 100%;
  }
  .hush {
    background: linear-gradient(30deg, black, grey);
    color: aliceblue;
    padding: 7px;
    border-radius: 3px;
  }
`;