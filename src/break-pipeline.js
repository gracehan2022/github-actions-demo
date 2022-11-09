async function main () {
  throw new Error('break!')
}

main()
  .then(() => {
    console.log('success');
    process.exit(0)
  })
  .catch(error => {
    console.error(error);
    process.exit(1)
  })