const Shimmer = () => {
    return (
      <div className="flex flex-wrap m-3">
        {Array(20)
          .fill("")
          .map((e, index) => (
            <div key={index} className="w-60 h-60 p-2 m-2 shadow-lg bg-pink-50"></div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  