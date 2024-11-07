export default function getStyleType (styleType) {
    switch(styleType) {
      case 'primary' :
        return 'bg-blue-500';
      case 'warning' :
          return 'bg-yellow-500';
      case 'success' :
        return 'bg-green-500';
      case 'error' :
          return 'bg-red-500';
      default:
        return 'bg-grey-500'
  
    }
  }