import React, { useRef, useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from 'react-icons/ai'
import { FiArrowLeft } from 'react-icons/fi'
import '../../Css/AddStory.css'

const AddStory = () => {

    const { config } = useContext(AuthContext)
    const imageEl = useRef(null)
    const editorEl = useRef(null)
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [slider, setSlider] = useState('')
    const [status, setStatus] = useState('')
    const [insurrance, setInsurrance] = useState('')
    const [address, setAddress] = useState('')
    const [content, setContent] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const clearInputs = () => {
        setTitle('')
        setContent('')
        setImage('')
        setSlider('')
        setStatus('')
        setInsurrance('')
        setAddress('')
        editorEl.current.editor.setData('')
        imageEl.current.value = ""
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append("title", title)
        formdata.append("image", image)
        formdata.append("slider", slider)
        formdata.append("status", status)
        formdata.append("insurrance", insurrance)
        formdata.append("address", address)
        formdata.append("content", content)

        try {
            const { data } = await axios.post("https://dangerous-eight.vercel.app/story/addstory", formdata, config)
            setSuccess('Add story successfully ')

            clearInputs()
            setTimeout(() => {
                setSuccess('')
            }, 7000)

        }
        catch (error) {
            setTimeout(() => {
                setError('')

            }, 7000)
            setError(error.response.data.error)

        }

    }
    return (

        <div className="Inclusive-addStory-page ">
            <Link to={'/'} >
                <FiArrowLeft />
            </Link>
            <form onSubmit={handleSubmit} className="addStory-form">

                {error && <div className="error_msg">{error}</div>}
                {success && <div className="success_msg">
                    <span>
                        {success}
                    </span>
                    <Link to="/">Go home</Link>
                </div>}

                <input
                    type="text"
                    required
                    id="title"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <input type="text" id="slider" placeholder="Slider" onChange={(e) => setSlider(e.target.value)} value={slider} />
                <input type="text" id="status" placeholder="Status" onChange={(e) => setStatus(e.target.value)} value={status} />
                <input type="text" id="insurrance" placeholder="Insurrance" onChange={(e) => setInsurrance(e.target.value)} value={insurrance} />
                <input type="text" id="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} />
                <input type='text' id="content" placeholder="Content" onChange={(e) => setContent(e.target.value)} value={content} />
                <div class="StoryImageField">
                    <AiOutlineUpload />
                    <div class="txt">
                        {image ? image.name :
                            " Include a high-quality image in your story to make it more inviting to readers."
                        }
                    </div>
                    <input
                        name="image"
                        type="file"
                        ref={imageEl}
                        onChange={(e) => {
                            setImage(e.target.files[0])
                        }}
                    />
                </div>
                <button type='submit' disabled={image ? false : true} className={image ? 'addStory-btn' : 'dis-btn'}
                >Publish </button>
            </form>

        </div>

    )
}

export default AddStory


