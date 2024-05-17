let reviews = [
    // Sample reviews
    { houseId: 1, user: 'Alice', rating: 5, comment: 'Amazing place!' },
    { houseId: 2, user: 'Bob', rating: 4, comment: 'Great location!' },
  ];
  
  export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const houseId = parseInt(searchParams.get('houseId'));
  
    const houseReviews = reviews.filter(review => review.houseId === houseId);
    return new Response(JSON.stringify(houseReviews), { status: 200 });
  }
  
  export async function POST(request) {
    const { houseId, user, rating, comment } = await request.json();
    reviews.push({ houseId, user, rating, comment });
  
    return new Response(JSON.stringify({ message: 'Review added' }), { status: 200 });
  }
  