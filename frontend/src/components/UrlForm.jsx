import{ useState } from'react';
import api from '../api/url.api';
import "../styles/UrlForm.css";

const UrlForm = () => {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setShortUrl("");
        setCopied(false);
        setLoading(true);

        try {
            new URL(longUrl);
        } catch {
            setError("Please enter a valid URL");
            setLoading(false);
            return ;
        }

        try {
            const res = await api.post("/shorten", { longUrl });
            setShortUrl(res.data.shortUrl);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Something went wrong. Please try again.");
        } finally{
            setLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
   
    return (
        <div className='url-form-container'>
            <form onSubmit={handleSubmit} className='url-form'>
                <div className='input-group'>
                    <input type="text"
                    placeholder='Paste your long link here...'
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    className='url-input'
                    />
                    <button type='submit' disabled={loading} className='shorten-btn'>
                        {loading ? "shortening..." : "Shorten URL"}
                    </button>
                </div>
            </form>

            {error &&  <p className='error-msg'>{error}</p>}

            {shortUrl && (
                <div className='result-container'>
                    <p className='success-label'>Shortened URL</p>
                    <div className='short-url-box'>
                        <a href={shortUrl} target="_blank" rel='noopener noreferrer'>{shortUrl}</a>
                        <button onClick={handleCopy} className='copy-btn'>
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UrlForm;