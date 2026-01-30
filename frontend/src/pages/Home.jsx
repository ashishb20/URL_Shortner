import UrlForm from "../components/UrlForm";

const Home = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        }}>
            <h1 style={{
                fontSize: '3rem',
                fontWeight: '800',
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                WebkitBackdropClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '2rem',
                textAlign: 'center',
            }}>
                LinkShrink
            </h1>
            <p style={{ 
                marginBottom: '2rem',
                color: '#555',
                fontSize: '1.2rem',
                textAlign: 'center',
                maxWidth: '400px',
                }}>
                    Shorten your long URLs with ease
            </p>
            <UrlForm />
        </div>
    );
};

export default Home;