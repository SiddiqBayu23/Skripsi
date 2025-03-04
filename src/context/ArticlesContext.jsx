import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('https://67c6f4e7c19eb8753e780f89.mockapi.io/Articles');
                const data = response.data;
                setArticles(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <ArticleContext.Provider value={articles}>
            {children}
        </ArticleContext.Provider>
    );
};

ArticleProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ArticleProvider;