import React from 'react';
import AnswerContent from './AnswerContent';

interface AnswerCardProps {
    status: string;
    answer: string;
    question: string;
}

const AnswerCard: React.FC<AnswerCardProps> = ({ status, answer, question }) => {
    const [title, setTitle] = React.useState('Ответы на вопросы по фронтенд-разработке');
    const [content, setContent] = React.useState('Выберите категорию в сайдбаре');
    React.useEffect(() => {
        if (answer  || question) {
            setTitle(question);
            setContent(answer);
            
        } else  {
            setTitle('Ответы на вопросы по фронтенд-разработке');

            setContent('Выберите категорию в сайдбаре');
        }
    }, [answer, question, status]);

    return (
        <div className='answer'>
            <h3 className='answer__title'>{title}</h3>
            <AnswerContent content={content} />
        </div>
    );
};

export default AnswerCard;
