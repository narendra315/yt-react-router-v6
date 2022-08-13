function ComponentName() {
  const onGoBack = () => {
    window.history.go(-1);
  }
  return (
    <div>
      <h1>404</h1>
      The page you are looking for cannot be found.
      Click <button onClick={onGoBack}>here</button> to go back
    </div>
  );
}

export default ComponentName;
