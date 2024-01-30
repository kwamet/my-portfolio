export default function TestButton() {
    const handleButtonClick = () => {
      console.log("Test Button clicked!");
    };
  
    return (
      <button onClick={handleButtonClick}>
        Test Button
      </button>
    );
  }
  