import { useState, useEffect } from 'react';
import Slider from "../../components/Slider";
import FaceEmojis from "../../components/FaceEmojis"
import {postDiary} from "../../services/DiaryService"
import "../../styles/layout.css"
import "../../styles/home.css"

const Write = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [happiness, setHappiness] = useState(50);
    const [emoji, setEmoji] = useState('\u{1F610}');

    useEffect(() => {
        chkAvailableToPost();
    });

    async function chkAvailableToPost() {
        if(title.length == 0 || content.length == 0) {
            document.getElementById("post_btn").classList.add("disabled");
            document.getElementById("post_btn").disabled = true;
        } else {
            document.getElementById("post_btn").classList.remove("disabled");
            document.getElementById("post_btn").disabled = false;
        }
    }

    const handleHappiness = (e, value) => {
        e.preventDefault();
        setHappiness(value);
    };

    const handleEmoji = (e) => {
        e.preventDefault();
        setEmoji(e.target.innerText);
        Array.from(document.querySelectorAll('.emojiBtn.active')).forEach(function(el) { 
            el.classList.remove('active');
        });
        e.target.classList.add("active");
    }

    const handleTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const handleContent = (e) => {
        e.preventDefault();
        setContent(e.target.value);
    }

    const post = (e) => {
        e.preventDefault();

        const diary = {title, content, happiness, emoji};
        console.log(diary);
        postDiary(diary).then((response) => {
            console.log(response);
        })
    }

    return (
        <div className='content'>
            <h1 className='tc tb'>오늘 하루는 어떠셨나요?</h1>
            <div className='wrapper flex-container'>
                <div id="emoji_section" className='sectionArea flex-item'>
                    <section>
                        <div className='sectionContent'>
                            {/* <Diary /> */}
                            <div>
                                <h2>오늘의 행복도</h2>
                                <div className='tc'>
                                    <p className='fs20'>{emoji}</p>
                                </div>
                                <div>
                                    <label htmlFor="happiness">행복도: {happiness}</label>
                                    <Slider onChange={handleHappiness} value={happiness}/>
                                </div>
                                <div>
                                    <FaceEmojis onClick={handleEmoji} value={emoji} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='sectionArea flex-item'>
                    <section>
                        <div className='sectionContent'>
                            <h2>일기</h2>
                            <div className='diary_write_area'>
                                <div className='diary_title_area'>
                                    <label htmlFor="nme"><span>- 제목</span></label>
                                    <input
                                        type="text"
                                        className="diary d_title"
                                        value={title}
                                        onChange={handleTitle}
                                        placeholder='오늘 하루를 간략히 적어볼까요?'
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="msg"><span>- 본문</span></label>
                                    <textarea
                                        name="message"
                                        id="msg"
                                        className="diary d_content"
                                        placeholder='오늘이 지나면 일기를 수정할 수 없어요!&#13;&#10;신중하고 빠짐 없이 작성해주세요'
                                        value={content}
                                        onChange={handleContent}
                                        required
                                        autoComplete="off"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className='post_btn_section'>
                <button
                    id='post_btn'
                    className="btn default-btn diary_post_btn disabled"
                    onClick={(e) => post(e)}
                    role="button"
                    // disabled
                >작성 완료</button>
            </div>
        </div>
    );
}

export default Write;