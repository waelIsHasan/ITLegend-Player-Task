import img from '../../img.png'
import './Comment.css'
export default function Comment({commentText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic cum culpa modi nam error."}){
    return(
        <div className="comment">
            <img src={img} alt="" />
            <div className="comment-info">
                <h3>Student Name Here</h3>
                <h5>Oct 5 , 2020</h5>
                <p>{commentText}</p>
            </div>
        </div>
    )

}