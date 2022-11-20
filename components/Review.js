const Review = (formData) => {
  return (
    <div className="w-full p-5">
      <p className="text-gray-700">Review data in Json :</p>
      <div className="w-full p-5">
        <pre className="w-3/4 text-[8px]">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Review;
