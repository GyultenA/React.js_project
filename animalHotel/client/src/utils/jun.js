   // const {username} = useContext(AuthContext);
    //const navigate = useNavigate();
    const { reviewId} = useParams();
    const {review, setReview} = useState({});
    const [loading, setLoading] = useState(true); 
   // console.log(`two ${reviewId}`)

    useEffect(()=> {
        getOne(reviewId)
      .then(review => setReview(review))
         
        
        .catch((err) => {
            Navigate(<NotFound />)
        })
    }, [reviewId])

    console.log('Current review state:', review); 
  
   
return (
    <article>
        <h3>Title: </h3>
        <p>Created at: </p>
        <div>
            <img src="" alt="" />
        </div>
        <p>Description: </p>
    </article>
);

{isOwner && (
    <div className="buttons">
        <Link to={`/review/${reviewId}/edit`} className="button">Edit</Link>
        <button className="button" onClick={deleteClickHandler}>Delete</button>

    </div>
)}