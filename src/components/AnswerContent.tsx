const AnswerContent = ({ content }: { content: string }) =>  {
    const lines = content.split('\\n');
    return (
        <div className='answer__content'>
            {lines.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </div>
    );
}

export default AnswerContent;