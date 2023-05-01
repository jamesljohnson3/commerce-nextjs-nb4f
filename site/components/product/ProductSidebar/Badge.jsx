import Badge from 'react-simple-badges'

const Badge = () => {
  return (
    <>
      <Badge name="node.js" style={{ width: 200 }} logoColor="#eb4034" />
      <Badge name="YouTube Gaming" label="Youtube" />
      <Badge name="Valve" label="Steamy Boi" style={{ padding: 10 }} />
      <Badge name="Tesla" backgroundColor="#32a853" />
    </>
  )
}

export default Badge
