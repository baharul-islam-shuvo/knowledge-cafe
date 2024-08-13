import profile from '../../assets/image/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center mx-8 my-8 p-4 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;