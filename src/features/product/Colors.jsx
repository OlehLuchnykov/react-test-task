const Colors = ({colors, onChange}) => {
  const getHex = (color) => {
    switch(color) {
      case 'желтый': return '#f8e217';
      case 'синий': return '#171bf8';
      case 'черный': return '#000';
      case 'белый': return '#fff';
      case 'серый': return '#ccc';
      default: return '#000'
    }
  }
  console.log('render color', colors);

  return (
    <div className={'color-list'}>
      {colors?.length > 0 && colors?.map(color => (
        <div
          key={color?.id}
          onClick={() => onChange(color)}
          className={'color-circle'}
          style={{backgroundColor: getHex(color?.name)}}
        />
      ))}
    </div>
  )
}

export default Colors;
