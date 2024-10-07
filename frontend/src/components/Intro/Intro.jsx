import './Intro.css';
import hero1 from '../../assets/YaDQ.gif'; 
import hero2 from '../../assets/3F3F.gif';

export default function Intro() {
    return (
        <div className='intro-container'>
            <div className='intro-text'>
                Добре Дошли в Парти център Friends! 
                <img src={hero1} alt="Hero 1" className="hero-icon" />
                Тук ще откриете забавни игри и безкрайни плиключения!
                <img src={hero2} alt="Hero 2" className="hero-icon" />
            </div>
        </div>
    );
}
