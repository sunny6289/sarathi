import ListItem from '../../List Item/ListItem';
import { TEMP_BOOK } from '../../../rawData/education';

const Education = () => {
    return (
        <div className='flex flex-col gap-4'>
            {
                TEMP_BOOK.map((book)=> <ListItem key={book.id} item={book}/>)
            }
        </div>
    );
}

export default Education;
