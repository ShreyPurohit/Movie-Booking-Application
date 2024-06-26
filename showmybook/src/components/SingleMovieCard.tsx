import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import { IMovieArray } from './interface';

const SingleMovieCard: React.FC<IMovieArray> = ({ data }) => {
    const navigate = useNavigate();
    const SeatingLayout = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        navigate(`/booking/${id}`)
    }
    return (
        <div className="max-w-sm rounded overflow-hidden bg-white h-full" key={data.id}>
            <img className="w-full h-48 object-cover" src={data.image} alt={data.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title} {data.year}</div>
                <p className="text-gray-700 text-base">
                    {data.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {data.genres.map((data, key) => {
                    return (
                        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={key}>{data}</div>
                    )
                })}
            </div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" key={data.id} onClick={((e) => SeatingLayout(e, data.id))}> Book Tickets </button>
        </div>
    );

}

export default SingleMovieCard