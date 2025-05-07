import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPosts } from "@/service/scrape.service";
import {
  Badge,
  Bookmark,
  Heart,
  MessageSquare,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import { useEffect, useState } from "react";

const CATEGORIES = [
  "All",
  "Personal",
  "News",
  "Technology",
  "Entertainment",
  "Sports",
];

// const MOCK_POSTS = [
//   {
//     id: 1,
//     user: {
//       name: "Alex Johnson",
//       username: "alexj",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     content:
//       "Just finished working on my new project! Can't wait to share it with everyone. #coding #newproject",
//     timestamp: "2023-05-07T14:30:00",
//     category: "Personal",
//     likes: 24,
//     comments: 5,
//     hasImage: true,
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: 2,
//     user: {
//       name: "Tech News Daily",
//       username: "technews",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     content:
//       "Breaking: New AI breakthrough allows for more efficient natural language processing. This could revolutionize how we interact with technology.",
//     timestamp: "2023-05-07T12:15:00",
//     category: "Technology",
//     likes: 152,
//     comments: 43,
//     hasImage: false,
//   },
//   {
//     id: 3,
//     user: {
//       name: "Sarah Williams",
//       username: "sarahw",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     content:
//       "Beautiful day for a hike! Nature always helps me clear my mind and find inspiration.",
//     timestamp: "2023-05-07T10:45:00",
//     category: "Personal",
//     likes: 87,
//     comments: 12,
//     hasImage: true,
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: 4,
//     user: {
//       name: "Entertainment Weekly",
//       username: "entweekly",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     content:
//       "The latest season of 'Stranger Things' breaks all previous viewing records in its first weekend!",
//     timestamp: "2023-05-07T09:20:00",
//     category: "Entertainment",
//     likes: 324,
//     comments: 78,
//     hasImage: true,
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     id: 5,
//     user: {
//       name: "Sports Center",
//       username: "sportscenter",
//       avatar: "/placeholder.svg?height=40&width=40",
//     },
//     content:
//       "Lakers win in overtime! What a game! LeBron James scores 38 points to lead his team to victory.",
//     timestamp: "2023-05-06T22:10:00",
//     category: "Sports",
//     likes: 421,
//     comments: 95,
//     hasImage: false,
//   },
// ];

export function HomeContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  // const filteredPosts =
  //   activeCategory === "All"
  //     ? posts
  //     : posts.filter((post) => post.category === activeCategory);

  useEffect(() => {
    async function main() {
      const posts = await getPosts("@mikannn");
      setPosts(posts);
    }

    main();
  }, []);

  return (
    <main className="flex-1 max-w-2xl mx-auto w-full">
      {/* Category Tabs */}
      <Tabs
        defaultValue="All"
        className="mb-6"
        onValueChange={setActiveCategory}
      >
        <TabsList className="w-full h-auto flex overflow-x-auto py-1 bg-white border rounded-lg">
          {CATEGORIES.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="flex-1 whitespace-nowrap"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.url} className="overflow-hidden">
            <CardHeader className="p-4 pb-0 flex flex-row items-start space-y-0 space-x-4">
              <Avatar>
                {/* <AvatarImage
                  src={post.user.avatar || "/placeholder.svg"}
                  alt={post.user.name}
                /> */}
                {/* <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback> */}
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    {/* <p className="font-medium">{post.user.name}</p> */}
                    <p className="text-sm text-gray-500">
                      {/* @{post.user.username} · {formatDate(post.timestamp)} */}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <Badge
                  // variant="outline"
                  className="bg-gray-100 hover:bg-gray-100"
                >
                  {/* {post.category} */}
                  Tecnologia
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <p className="mb-4">{post.title}</p>
              {post.thumbnail && (
                <div className="rounded-lg overflow-hidden mb-2">
                  <img
                    src={post.thumbnail || "/placeholder.svg"}
                    alt="Post image"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              )}
            </CardContent>
            <CardFooter className="p-4 pt-0 border-t flex justify-between">
              {/* <Button variant="ghost" size="sm" className="text-gray-600">
                <Heart className="mr-1 h-4 w-4" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <MessageSquare className="mr-1 h-4 w-4" />
                {post.comments}
              </Button> */}
              <Button variant="ghost" size="sm" className="text-gray-600">
                <Share2 className="mr-1 h-4 w-4" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <Bookmark className="mr-1 h-4 w-4" />
                Save
              </Button>
            </CardFooter>
          </Card>
        ))}

        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
        )}
      </div>
    </main>
  );
}
