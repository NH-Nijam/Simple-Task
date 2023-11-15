
import Card from './Card';
import written from '../img/written.png'
import writter1 from '../img/writter1.png'
import writter2 from '../img/writter2.png'
import writter3 from '../img/writter3.png'
import writter4 from '../img/writter4.png'
import arrow from '../img/arrow.png'
const FirstSection = () => {
    return (
        <div className='container mx-auto mt-[100px]'>
            <h1 className='text-[40px] font-bold text-center'>UI/UX Design</h1>
            <div className='mt-[60px] grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Card arrow={arrow} img={written} title='Web Design' />
                <Card arrow={arrow} img={writter1} title='Mobile App Design' />
                <Card arrow={arrow} img={writter2} title='UI/UX Design' />
                <Card arrow={arrow} img={writter3} title='Wireframe Design' />
                <Card arrow={arrow} img={writter4} title='Prototyping' />
            </div>

        </div>
    );
};

export default FirstSection;