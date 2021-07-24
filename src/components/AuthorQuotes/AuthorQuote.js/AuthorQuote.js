const AuthorQuote = ({ text }) => {
  return (
    <article className='mb-14 md:mb-24  max-w-custom flex justify-start'>
      <div className='border-4 border-solid border-borderColor mr-7 md:mr-24'></div>
      <div className='font-medium text-xl md:text-4xl md:leading-custom'>“{text}”</div>
    </article>
  )
}

export default AuthorQuote
