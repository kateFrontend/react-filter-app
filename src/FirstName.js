function firstName({anyWordYouWant}) {
  return (
    <div>
    {anyWordYouWant.map((element => {
      const {id, firstName} = element;
      return <div key={id}>
        <p>{id}</p>
        <p>{firstName}</p>
      </div>
    }))}
  </div>
  )
}

export default firstName