import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-6xl mb-4">404</CardTitle>
            <CardDescription className="text-lg">
              Ups! Diese Seite existiert nicht.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Die Seite, die Sie suchen, wurde möglicherweise verschoben, gelöscht oder existiert nicht.
            </p>
            <Button asChild>
              <Link to="/">Zur Startseite</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound; 