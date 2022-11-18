const Review = (formData) => {
  return (
    <>
      <div className="w-full p-5">
        <pre className="w-3/4">{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </>
  );
};

export default Review;
