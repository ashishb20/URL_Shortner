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
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '2rem',
                textAlign: 'center',
            }}>
                LinkShrink
            </h1>
            <p style={{ 
                marginBottom: '2rem',
                color: '#94a3b8',
                fontSize: '1.1rem',
                textAlign: 'center',
                maxWidth: '400px',
                }}>
                    Shorten your long URLs with ease
            </p>
            <UrlForm />
            <footer style={{ marginTop: '3rem', color: '#94a3b8' }}>Made with ❤️ by <strong>Ashish Bairwa</strong></footer>
        </div>
    );
};

export default Home;