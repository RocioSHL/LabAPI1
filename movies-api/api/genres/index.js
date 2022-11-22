import express from 'express';
import { genres} from './genreData';
import genre from './genresModel'
import uniqid from 'uniqid'
const router = express.Router(); 
/*router.get('/', (req, res) => {
    res.json(genres);
});*/
// Get movie genre
router.get('/:id',async (req, res) => {
    const id = parseInt(req.params.id);
   
    if (genres.id == id) {
        res.status(200).json(movieDetails);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});
router.get('/', async (req, res) => {
    const genres = await genre.find();
    res.status(200).json(genres);
});
export default router;