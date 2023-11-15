
const Card = ({ img, title, arrow }) => {
    return (
        <div className='border p-[30px] rounded-[10px] hover:shadow-xl '>
            <div className='flex justify-between lg:w-[200px] w-[250px] xl:w-[300px] '>
                <img className='w-[44px] h-[44px]' src={img} alt="" />
                <img className='w-[26.566px] h-[26.566px]' src="src/img/star.png" alt="" />
            </div>
            <div className='mt-6 flex items-center justify-between'>
                <div>
                    <h2 className='xl:text-2xl md:text-xl text-lg font-semibold text-[#2B2B2B] mb-2'>{title}</h2>
                    <h2 className='xl:text-2xl md:text-xl text-lg font-normal text-[#636161] '>We Do Web Design</h2>
                </div>
                <div className='border w-[54px] h-[54px] rounded-full flex justify-center items-center hover:bg-[#FF6809] h'>
                    <img className='w-[28px] h-[28px]' src={arrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Card;