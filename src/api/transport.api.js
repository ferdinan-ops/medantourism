export const getAllKoridor = async () => {
  const req = await fetch('http://66.42.48.47:3090/metrodeli')
  const res = await req.json()
  return res
}

export const getDetailKoridor = async (id) => {
  const req = await fetch(`http://66.42.48.47:3090/metrodeli/${id}`)
  const res = await req.json()
  return res
}
